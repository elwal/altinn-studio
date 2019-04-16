using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Runtime.Serialization.Json;
using System.Text;
using System.Threading.Tasks;
using AltinnCore.Common.Configuration;
using AltinnCore.Common.Helpers;
using AltinnCore.Common.Models;
using AltinnCore.Common.Services.Interfaces;
using AltinnCore.ServiceLibrary.Enums;
using AltinnCore.ServiceLibrary.Models.Workflow;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;

namespace AltinnCore.Common.Services.Implementation
{
    /// <summary>
    /// workflow Service implementation for deployed application
    /// </summary>
    public class WorkflowAppSI : IWorkflow
    {
        private readonly ServiceRepositorySettings _settings;
        private readonly TestdataRepositorySettings _testdataRepositorySettings;
        private readonly PlatformStorageSettings _platformStorageSettings;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private const string CreateInitialServiceStateMethod = "InitializeServiceState";
        private const string UpdateCurrentStateMethod = "UpdateCurrentState";
        private const string GetCurrentStateMethod = "GetCurrentState";

        /// <summary>
        /// Initializes a new instance of the <see cref="WorkflowSI"/> class.
        /// </summary>
        /// <param name="httpContextAccessor">The http context accessor</param>
        /// <param name="repositorySettings">The service repository settings</param>
        /// <param name="testdataRepositorySettings">The test data repository settings</param>
        public WorkflowAppSI(IOptions<ServiceRepositorySettings> repositorySettings, IOptions<TestdataRepositorySettings> testdataRepositorySettings, IHttpContextAccessor httpContextAccessor, IOptions<PlatformStorageSettings> platformStorageSettings)
        {
            _settings = repositorySettings.Value;
            _testdataRepositorySettings = testdataRepositorySettings.Value;
            _httpContextAccessor = httpContextAccessor;
            _platformStorageSettings = platformStorageSettings.Value;
        }

        /// <inheritdoc/>
        public ServiceState GetInitialServiceState(string owner, string service, int reporteeId)
        {
            string workflowData = System.IO.File.ReadAllText("workflow.bpmn", Encoding.UTF8);
            return WorkflowHelper.GetInitialWorkflowState(workflowData);
        }

        /// <inheritdoc/>
        public ServiceState InitializeServiceState(Guid id, string owner, string service, int reporteeId)
        {
            string workflowData = System.IO.File.ReadAllText("workflow.bpmn", Encoding.UTF8);
            return WorkflowHelper.GetInitialWorkflowState(workflowData);
        }

        /// <inheritdoc/>
        public string GetUrlForCurrentState(Guid instanceId, string owner, string service, WorkflowStep currentState)
        {
            return WorkflowHelper.GetUrlForCurrentState(instanceId, owner, service, currentState);
        }

        /// <inheritdoc/>
        public ServiceState GetCurrentState(Guid instanceId, string owner, string service, int instanceOwnerId)
        {
            Instance instance;
            DataContractJsonSerializer serializer = new DataContractJsonSerializer(typeof(Instance));
            string apiUrl = $"{_platformStorageSettings.ApiUrl}/instances/{instanceId}/?instanceOwnerId={instanceOwnerId}";
            using (HttpClient client = new HttpClient())
            {
                client.BaseAddress = new Uri(apiUrl);

                Task<HttpResponseMessage> response = client.GetAsync(apiUrl);
                if (response.Result.StatusCode == System.Net.HttpStatusCode.OK)
                {
                    string instanceData = response.Result.Content.ReadAsStringAsync().Result;
                    instance = JsonConvert.DeserializeObject<Instance>(instanceData);
                }
                else
                {
                    throw new Exception("Unable to fetch workflow state");
                }

                Enum.TryParse<WorkflowStep>(instance.CurrentWorkflowStep, out WorkflowStep currentWorkflowState);

                return new ServiceState
                {
                    State = currentWorkflowState
                };
            }
        }

        /// <inheritdoc/>
        public ServiceState MoveServiceForwardInWorkflow(Guid id, string owner, string service, int reporteeId)
        {
            string workflowData = System.IO.File.ReadAllText("workflow.bpmn", Encoding.UTF8);
            return WorkflowHelper.GetInitialWorkflowState(workflowData);
        }
    }
}
