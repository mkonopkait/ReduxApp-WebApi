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
                Product[] products =
                {
                    new Product()
                    {
                        Name = "Chleb",
                        Price = 2.4m
                    },
                    new Product()
                    {
                        Name = "Mleko",
                        Price = 1.6m
                    },
                    new Product()
                    {
                        Name = "Gitara",
                        Price = 10.5m
                    }
                };
                context.Product.AddRange(products);
                context.SaveChanges();
            }
        }
    }
}
