using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using Persistence;
using WebApi.Actions;
using WebApi.Models;
using WebApi.Services;

namespace WebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // requires using Microsoft.Extensions.Options
            services.Configure<FinMonitoringDatabaseSettings>(
                Configuration.GetSection(nameof(FinMonitoringDatabaseSettings)));

            services.AddSingleton<IFinMonitoringDatabaseSettings>(sp =>
                sp.GetRequiredService<IOptions<FinMonitoringDatabaseSettings>>().Value);

            services.AddSingleton<FundService>();//mongo
           // services.AddSingleton<CategoryServiceMongo>();//mongo
            //services.AddSingleton<IngredientsService>();//mongo

            services.AddCors(c =>
            {
                c.AddPolicy("CorsPolicy",
                    options =>
                    {
                        options.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000");
                    });
            });

            string connection = Configuration.GetConnectionString("DefaultConnection");
            services.AddDbContext<ApplicationContext>(options =>
                options.UseSqlServer(connection));

            services.AddTransient<CategoryService>();
            services.AddTransient<IngredientService>();

            services.AddSwaggerConfiguration();

            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseSwaggerConfiguration();

            app.UseHttpsRedirection();
            
            app.UseRouting();

            app.UseAuthorization();

            app.UseCors("CorsPolicy");

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
