<script>
  import { Meteor } from "meteor/meteor";

  let newTask = "";

  const handleSubmit = () => {
    if (!newTask) return;
    Meteor.call("tasks.insert", newTask);
    // Clear form
    newTask = "";
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
