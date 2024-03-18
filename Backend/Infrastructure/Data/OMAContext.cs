using Core.Entities;
using Core.Enums;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data;

public class OMAContext : DbContext
{
    public DbSet<Customer> Customers { get; set; }
    public DbSet<Order> Orders { get; set; }
    public DbSet<Address> Addresses { get; set; }

    public OMAContext(DbContextOptions options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Customer>().HasData(
            new Customer
            {
                Id = 1,
                FirstName = "James",
                LastName = "Bond",
                ContactNumber = "08012345678",
                Email = "jamesbond@hermajesty.com",
                IsDeleted = false
            },
            new Customer
            {
                Id = 2,
                FirstName = "Monty",
                LastName = "Python",
                ContactNumber = "09041112222",
                Email = "monty@hermajesty.com",
                IsDeleted = false
            }
        );
        modelBuilder.Entity<Address>().HasData(
            new Address
            {
                Id = 1,
                CustomerId = 1,
                AddressLine1 = "SomePlace",
                AddressLine2 = "There",
                City = "Melbourne",
                State = "Victoria",
                Country = "AU"
            },
            new Address
            {
                Id = 2,
                CustomerId = 2,
                AddressLine1 = "Another Place",
                AddressLine2 = "Here",
                City = "Melbourne",
                State = "Victoria",
                Country = "AU"
            }
        );
        modelBuilder.Entity<Order>().HasData(
            new Order
            {
                Id=1,
                CustomerId = 1,
                OrderDate = new DateTime(2024,3,10),
                Description = "New Item",
                TotalAmount = 500,
                DepositAmount = 10,
                IsDelivery = true,
                IsDeleted = false,
                Status = Status.Pending,
                OtherNotes = "Something new"
            },
            new Order
            {
                Id=2,
                CustomerId = 2,
                OrderDate = new DateTime(2024,3,12),
                Description = "Another New Item",
                TotalAmount = 5000,
                DepositAmount = 250,
                IsDelivery = false,
                IsDeleted = false,
                Status = Status.Draft,
                OtherNotes = "Something new again"
            }
        );
    }
}