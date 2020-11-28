using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
            Database.EnsureDeleted();
            Database.EnsureCreated(); // создаем базу данных при первом обращении
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>()
                .HasOne<Category>(s => s.Category)
                .WithMany(g => g.Products)
                .HasForeignKey(s => s.Id);

            //OneToMany (One ingredient has many IngredientHistory)
            modelBuilder.Entity<IngredientHistory>()
                .HasOne<Ingredient>(s => s.Ingredient)
                .WithMany(g => g.IngredientHistory)
                .HasForeignKey(s => s.Id);


            //ManyToMany
            modelBuilder.Entity<IngredientProduct>().HasKey(sc => new { sc.IngredientId, sc.ProductId });
            modelBuilder.Entity<IngredientProduct>()
                .HasOne<Ingredient>(sc => sc.Ingredient)
                .WithMany(s => s.IngredientProduct)
                .HasForeignKey(sc => sc.IngredientId);
            modelBuilder.Entity<IngredientProduct>()
                .HasOne<Product>(sc => sc.Product)
                .WithMany(s => s.IngredientProduct)
                .HasForeignKey(sc => sc.ProductId);
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }
        public DbSet<IngredientHistory> IngredientHistory { get; set; }
        public DbSet<Measurement> Measurements { get; set; }
        public DbSet<IngredientProduct> IngredientProduct { get; set; }
        public DbSet<Purchase> Purchases { get; set; }
    }
}
