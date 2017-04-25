using System.ComponentModel.DataAnnotations;
namespace Core.Domain
{
    public class Todo
    {
        [Required]
        public string Id { get; set; }
        [Required]
        public int CategoryId { get; set; }
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
        [Required]
        public bool IsComplete { get; set; }

        public string Print() => "Still to impletement this one!";
    }
}