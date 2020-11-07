using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi.Models;
using WebApi.Services;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FundsController : ControllerBase
    {
        private readonly FundService _fundService;

        public FundsController(FundService fundService)
        {
            _fundService = fundService;
        }

        // GET: api/Funds
        [HttpGet]
        public ActionResult<List<Fund>> Get() => _fundService.Get();

        // GET: api/Funds/5
        [HttpGet("{id:length(24)}", Name = "GetFund")]
        public ActionResult<Fund> Get(string id)
        {
            var fund = _fundService.Get(id);

            if (fund == null)
            {
                return NotFound();
            }

            return fund;
        }

        // POST: api/Funds
        [HttpPost]
        public ActionResult<Fund> Create(Fund fund)
        {
            fund = new Fund()
            {
                Amount = 10,
                FundName = "Sem",
                Goal = 100
            };

            _fundService.Create(fund);

            return CreatedAtRoute("GetFund", new { id = fund.Id.ToString() }, fund);
        }

        //// PUT: api/Funds/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE: api/ApiWithActions/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
