using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Model;

namespace WebApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
                : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<InvoiceProduct>()
                .HasKey(ip => new { ip.InvoiceId, ip.ProductId });

            modelBuilder.Entity<InvoiceProduct>()
                .HasOne(ip => ip.Invoice)
                .WithMany(i => i.InvoiceProduct)
                .HasForeignKey(pt => pt.InvoiceId);

            modelBuilder.Entity<InvoiceProduct>()
                .HasOne(ip => ip.Product)
                .WithMany(p => p.InvoiceProduct)
                .HasForeignKey(ip => ip.ProductId);
        }

        public DbSet<WebApi.Model.Product> Product { get; set; }
        public DbSet<WebApi.Model.Invoice> Invoice { get; set; }
    }
}
