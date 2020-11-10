using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi.Models;
using WebApi.Services;
using Microsoft.AspNetCore.Cors;
using Newtonsoft.Json.Schema;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class FundsController : ControllerBase
    {
        private readonly FundService _fundService;

        public FundsController(FundService fundService)
        {
            _fundService = fundService;
        }

        // GET: api/Funds
        [HttpGet]
        public ActionResult<List<Fund>> Get()
        {

            var newFund = new Fund
            {

                Amount = 200,
                Currency = "USD",
                FundName = "dron",
                Goal = 1000,

                History = new List<FundHistory> {
                    new FundHistory {
                    Date = DateTime.Now.ToString(),
                    Amount = 100
                },
                 new FundHistory {
                    Date = DateTime.Now.ToString(),
                    Amount = 100 }

                }
            };

            _fundService.Create(newFund);

            return _fundService.Get();
        }

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
            _fundService.Create(fund);

            return CreatedAtRoute("GetFund", new { id = fund.Id.ToString() }, fund);
        }

        // PUT: api/Funds/5
        [HttpPut("{id}")]
        public void Put(string id, [FromBody] Fund value)
        {
            _fundService.Update(id, value);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            _fundService.Remove(id);
        }
    }
}
