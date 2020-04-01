using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Data;
using WebApi.Model;

namespace WebApi.Helpers
{
    public class SeedDatabase
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new AppDbContext(
                serviceProvider.GetRequiredService<
                    DbContextOptions<AppDbContext>>()))
            {
                if (context.Product.Any())
                {
                    return;
                }
                var products = new List<Product>();
                for(int i = 0; i<100; i++)
                {
                    var product = new Product()
                    {
                        Name = $"Produkt {i}",
                        Price = i
                    };
                    products.Add(product);
                }
                
                context.Product.AddRange(products);
                context.SaveChanges();
            }
        }
    }
}
