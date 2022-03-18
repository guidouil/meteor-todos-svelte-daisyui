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

<form class="my-4 w-full" on:submit|preventDefault={handleSubmit}>
  <div class="form-control w-full">
    <div class="input-group md:input-group-lg w-full">
      <input
        type="text"
        name="text"
        placeholder="Type to add new tasks…"
        class="input input-bordered md:input-lg"
        bind:value={newTask}
      />
      <button class="btn btn-primary btn-square md:btn-lg" type="submit">
        ➕
      </button>
    </div>
  </div>
</form>
