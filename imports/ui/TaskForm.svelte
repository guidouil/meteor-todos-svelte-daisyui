<script>
  import { TasksCollection } from "../api/TasksCollection";

  let newTask = "";

  const handleSubmit = () => {
    if (newTask) {
      // Insert a task into the collection
      TasksCollection.insert({
        text: newTask,
        createdAt: new Date(), // current time
      });

      // Clear form
      newTask = "";
    }
  };
</script>

<form class="form" on:submit|preventDefault={handleSubmit}>
  <div class="form-control">
    <div class="input-group input-group-lg w-full">
      <input
        type="text"
        name="text"
        placeholder="Type to add new tasks…"
        class="input input-bordered"
        ind:value={newTask}
      />
      <button class="btn btn-primary btn-square" type="submit"> ➕ </button>
    </div>
  </div>
</form>
