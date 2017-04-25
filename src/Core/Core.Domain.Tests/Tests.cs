using System;
using Xunit;
using Core.Domain;
namespace Tests
{
    public class Tests
    {
        [Fact]
        public void Test1() 
        {
            Category c = new Category();                        
            c.Name = "test";            
            Assert.True(c.Name == "test");
        }
    }
}
