using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Dto;
using WebApi.Models;

namespace WebApi.Services
{
    public class CategoryService
    {
        private ApplicationContext db;
        public CategoryService(ApplicationContext context)
        {
            db = context;
        }

        public ResponseWrapper<IEnumerable<CategoryDto>> GetAllCategories() {
            try
            {
                var categoriesDto = db.Categories.ToList().Select(x => new CategoryDto { Id = x.Id, Name = x.Name });
                return new ResponseWrapper<IEnumerable<CategoryDto>>()
                {
                    Data = categoriesDto,
                    IsError = false,
                    Message = "Success"
                };
            
            }catch(Exception e)
            {
                return new ResponseWrapper<IEnumerable<CategoryDto>>()
                {
                    IsError = true,
                    Message = e.Message
                };
            }
        }

        public async Task<ResponseWrapper<CategoryDto>> Create(string categoryName)
        {
            var category = new Category
            {
                Name = categoryName
            };
            db.Categories.Add(category);
            await db.SaveChangesAsync();
            return new ResponseWrapper<CategoryDto>
            {
                Data = new CategoryDto
                {
                    Id = category.Id,
                    Name = category.Name
                }
            };
        }

        public async Task<ResponseWrapper<CategoryDto>> Update(int id, string categoryName)
        {
            var category = db.Categories.Find(id);
            if (category == null)
            {
                return new ResponseWrapper<CategoryDto>
                {
                    IsError = false,
                    Message = "Category cannot find"
                };
            }

            category.Name = categoryName;
            await db.SaveChangesAsync();
            return new ResponseWrapper<CategoryDto>
            {
                Data = new CategoryDto
                {
                    Id = category.Id,
                    Name = category.Name
                }
            };
        }

        public async Task<ResponseWrapper<bool>> Delete(int id)
        {
            try
            {
                db.Categories.Remove(db.Categories.Find(id));
                await db.SaveChangesAsync();
                return new ResponseWrapper<bool>
                {
                    Data = true
                };
            }
            catch(Exception e)
            {
                return new ResponseWrapper<bool>
                {
                    IsError = true,
                    Message = e.Message
                };
            }
        }
    }
}
