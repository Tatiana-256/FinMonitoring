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

            ///Product 
            modelBuilder.Entity<Product>()
                .HasOne<Category>(s => s.Category)
                .WithMany(g => g.Products)
                .HasForeignKey(s => s.CategoryId);

            /*modelBuilder.Entity<Ingredient>(b =>
            {
                b.HasKey(e => e.Id);
                b.Property(e => e.Id).ValueGeneratedOnAdd();
            });*/

            // IngredientHistory

            //OneToMany (One ingredient has many IngredientHistory)
            modelBuilder.Entity<IngredientHistory>()
                .HasOne<Ingredient>(s => s.Ingredient)
                .WithMany(g => g.IngredientHistory)
                .HasForeignKey(s => s.IngregientId);

            modelBuilder.Entity<IngredientHistory>()
                .HasOne<TypeOfOperatoin>(s => s.TypeOfOperatoin)
                .WithMany(g => g.IngredientHistories)
                .HasForeignKey(s => s.TypeOfOperatoinId);

            modelBuilder.Entity<IngredientHistory>()
                .HasOne<Supplying>(s => s.Supplying)
                .WithMany(g => g.IngredientHistory)
                .HasForeignKey(s => s.SupplyingId);


            // Ingredient

            modelBuilder.Entity<Ingredient>()
                .HasOne<Measurement>(s => s.Measurement)
                .WithMany(g => g.Ingredients)
                .HasForeignKey(s => s.MeasurementId);

            /*modelBuilder.Entity<Ingredient>()
                .Property(p => p.Id)
                .ValueGeneratedOnAdd();*/


            //ManyToMany

            // Ingredient with Product
            modelBuilder.Entity<IngredientProduct>().HasKey(sc => new { sc.IngredientId, sc.ProductId });
            modelBuilder.Entity<IngredientProduct>()
                .HasOne<Ingredient>(sc => sc.Ingredient)
                .WithMany(s => s.IngredientProduct)
                .HasForeignKey(sc => sc.IngredientId);
            modelBuilder.Entity<IngredientProduct>()
                .HasOne<Product>(sc => sc.Product)
                .WithMany(s => s.IngredientProduct)
                .HasForeignKey(sc => sc.ProductId);


            //Product and purchase

            modelBuilder.Entity<ProductPurchase>().HasKey(sc => new { sc.PurchaseId, sc.ProductId });
            modelBuilder.Entity<ProductPurchase>()
                .HasOne<Purchase>(sc => sc.Purchase)
                .WithMany(s => s.ProductPurchase)
                .HasForeignKey(sc => sc.PurchaseId);
            modelBuilder.Entity<ProductPurchase>()
                .HasOne<Product>(sc => sc.Product)
                .WithMany(s => s.ProductPurchases)
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
        public DbSet<Supplying> Supplying { get; set; }
        public DbSet<ProductPurchase> ProductPurchase { get; set; }
    }
}
