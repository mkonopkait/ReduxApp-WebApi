using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Model
{
    public class Invoice
    {
        public int InvoiceId { get; set; }

        public int Number { get; set; }

        public DateTime IssueDate { get; set; }

        public DateTime SoldDate { get; set; }

        public string IssuePlace { get; set; }

        public string Seller { get; set; }

        public string Purchaser { get; set; }


    }
}
