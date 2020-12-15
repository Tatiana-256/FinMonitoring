namespace WebApi.Models
{
    public class ResponseWrapper<T>
    {
        public T Data { get; set; }
        public string Message { get; set; }
        public bool IsError { get; set; }
    }
}
