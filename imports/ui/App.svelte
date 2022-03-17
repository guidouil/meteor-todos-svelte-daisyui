<script>
  import { TasksCollection } from "../api/TasksCollection";
  import NavBar from "./NavBar.svelte";
  import Task from "./Task.svelte";
  import TaskForm from "./TaskForm.svelte";

  $m: tasks = TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch();
</script>

<main>
  <NavBar />

  <div class="max-w-lg mx-auto px-8">
    <TaskForm />
    <div class="divider" />
    <ul>
      {#each tasks as task (task._id)}
        <Task {task} />
      {/each}
    </ul>
  </div>
</main>
