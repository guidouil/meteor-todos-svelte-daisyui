<script>
  import { TasksCollection } from "../api/TasksCollection";

  export let task;

  const toggleChecked = () => {
    // Set the isChecked property to the opposite of its current value
    TasksCollection.update(task._id, {
      $set: { isChecked: !task.isChecked },
    });
  };
  const deleteThisTask = () => {
    TasksCollection.remove(task._id);
  };
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
