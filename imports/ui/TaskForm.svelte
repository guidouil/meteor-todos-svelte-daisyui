<script>
  import { TasksCollection } from "../api/TasksCollection";

  export let user = null;
  let newTask = "";

  const handleSubmit = () => {
    if (newTask) {
      // Insert a task into the collection
      TasksCollection.insert({
        text: newTask,
        userId: user._id,
        createdAt: new Date(), // current time
      });

      // Clear form
      newTask = "";
    }
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="form-control">
    <div class="input-group input-group-lg max-w-lg">
      <input
        type="text"
        name="text"
        placeholder="Type to add new tasks…"
        class="input input-bordered input-lg"
        bind:value={newTask}
      />
      <button class="btn btn-primary btn-square btn-lg" type="submit">
        ➕
      </button>
    </div>
  </div>
</form>
