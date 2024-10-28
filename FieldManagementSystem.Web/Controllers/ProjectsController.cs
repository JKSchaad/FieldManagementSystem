using Microsoft.AspNetCore.Mvc;
using FieldManagementSystem.Web.Models;
using System.Diagnostics;

namespace FieldManagementSystem.Web.Controllers
{
    // Defines a controller named 'ProjectsController' within the FieldManagementSystem.Web namespace.
    public class ProjectsController : Controller
    {
        // A logger instance for this controller, used for logging information, errors, etc.
        private readonly ILogger<ProjectsController> _logger;

        // Constructor for the ProjectsController.
        // It uses dependency injection to get an instance of ILogger for logging purposes.
        public ProjectsController(ILogger<ProjectsController> logger)
        {
            // Assigns the injected logger instance to the private field '_logger'.
            _logger = logger;
        }

        // Handles HTTP GET requests for the Index action.
        // This action returns the default view associated with the 'Projects' action of the Projects controller.
        public IActionResult Index()
        {
            // Returns a View result that will render the corresponding view located in the 'Projects' folder (Index.cshtml).
            return View();
        }

        // Handles errors and provides a response with caching disabled.
        // The ResponseCache attribute specifies caching options for this particular action.
        // Duration = 0: No caching duration is set (effectively disables caching).
        // Location = ResponseCacheLocation.None: The response should not be stored in any cache.
        // NoStore = true: Ensures that no part of this response is stored by any cache.
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            // Returns the 'Error' view with an instance of 'ErrorViewModel'.
            // The 'RequestId' is either the current activity ID or the HttpContext trace identifier.
            // This is helpful in identifying and diagnosing errors, providing the client with a unique ID.
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
