<script>
  export let task;

  const toggleChecked = () => {
    // Set the isChecked property to the opposite of its current value
    Meteor.call("tasks.setIsChecked", task._id, !task.isChecked);
  };
  const deleteThisTask = () => Meteor.call("tasks.remove", task._id);
</script>

<li>
  <button
    class="btn btn-sm btn-square btn-ghost delete"
    on:click={deleteThisTask}>❌</button
  >
  <div class="form-control">
    <label class="label cursor-pointer" for={task._id}>
      <input
        class="checkbox"
        type="checkbox"
        id={task._id}
        readonly
        checked={!!task.isChecked}
        on:click={toggleChecked}
      />
      <span class="label-text text-xl">{task.text}</span>
    </label>
  </div>
  <hr />
</li>

<style>
  .delete {
    float: right;
  }
</style>
