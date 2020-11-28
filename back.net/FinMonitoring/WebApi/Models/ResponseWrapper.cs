using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class ResponseWrapper<T>
    {
        public T Data { get; set; }
        public string Message { get; set; }
        public bool IsError { get; set; }
    }
}
