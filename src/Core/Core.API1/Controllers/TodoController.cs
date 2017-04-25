using Microsoft.AspNetCore.Mvc;
using Core.Domain;
using Core.Repository;

namespace Core.API.Controllers
{
    [Route("api/[controller]")]
    public class TodoController : Controller
    {
        public TodoRepository TodoItems { get; set; }

        public TodoController(TodoRepository todoItems)
        {
            TodoItems = todoItems;
        }
        
        // [HttpGet]
        // public IEnumerable<Todo> GetAll()
        // {
        //     return TodoItems.GetAll();
        // }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(TodoItems.GetAll());
        }

        [HttpGet("{id}", Name = "GetTodo")]
        public IActionResult GetById(string id)
        {
            var item = TodoItems.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Core.Domain.Todo item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            TodoItems.Add(item);
            return CreatedAtRoute("GetTodo", new { id = item.Id }, item);
        }

        // [HttpPost("{id}")]
        // public IActionResult Create(string id, [FromBody] Core.Domain.ToDo item)
        // {
        //     try
        //     {
        //         if (item == null || !ModelState.IsValid)
        //         {
        //             return BadRequest(ErrorCode.TodoItemNameAndNotesRequired.ToString());
        //         }
        //         bool itemExists = _toDoRepository.DoesItemExist(item.ID);
        //         if (itemExists)
        //         {
        //             return StatusCode(StatusCodes.Status409Conflict, ErrorCode.TodoItemIDInUse.ToString());
        //         }
        //         _toDoRepository.Insert(item);
        //     }
        //     catch 
        //     {
        //         return BadRequest(ErrorCode.CouldNotCreateItem.ToString());
        //     }
        //     return Ok(item);
        // }

        [HttpPut("{id}")]
        public IActionResult Update(string id, [FromBody] Todo item)
        {
            if (item == null || item.Id != id)
            {
                return BadRequest();
            }

            var todo = TodoItems.Find(id);
            if (todo == null)
            {
                return NotFound();
            }

            TodoItems.Update(item);
            return new NoContentResult();
        }

        [HttpPatch("{id}")]
        public IActionResult Update([FromBody] Todo item, string id)
        {
            if (item == null)
            {
                return BadRequest();
            }

            var todo = TodoItems.Find(id);
            if (todo == null)
            {
                return NotFound();
            }

            item.Id = todo.Id;

            TodoItems.Update(item);
            return new NoContentResult();
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            var todo = TodoItems.Find(id);
            if (todo == null)
            {
                return NotFound();
            }

            TodoItems.Remove(id);
            return new NoContentResult();
        }
    }
}