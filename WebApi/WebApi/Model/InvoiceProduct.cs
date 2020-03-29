using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Model
{
    public class InvoiceProduct
    {
        public int InvoiceId { get; set; }

        public Invoice Invoice { get; set; }

        public int ProductId { get; set; }

        public Product Product { get; set; }
    }
}
