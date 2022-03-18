<script>
  import { Meteor } from "meteor/meteor";
  import { TasksCollection } from "../api/TasksCollection";
  import NavBar from "./NavBar.svelte";
  import Task from "./Task.svelte";
  import TaskForm from "./TaskForm.svelte";
  import LoginForm from "./LoginForm.svelte";

  let user = null;
  let incompleteCount;
  let pendingTasksTitle = "";
  let tasks = [];
  let hideCompleted = false;
  const hideCompletedFilter = { isChecked: { $ne: true } };
  $m: {
    user = Meteor.user();
    const userFilter = user ? { userId: user._id } : {};
    const pendingOnlyFilter = { ...hideCompletedFilter, ...userFilter };
    tasks = user
      ? TasksCollection.find(hideCompleted ? pendingOnlyFilter : userFilter, {
          sort: { createdAt: -1 },
        }).fetch()
      : [];

    incompleteCount = user
      ? TasksCollection.find(pendingOnlyFilter).count()
      : 0;

    pendingTasksTitle = `${incompleteCount ? ` (${incompleteCount})` : ""}`;
  }

  const setHideCompleted = (value) => {
    hideCompleted = value;
  };
</script>

<main>
  <NavBar {pendingTasksTitle} {user} />
  <div class="max-w-lg mx-auto px-8">
    {#if user}
      <TaskForm {user} />
      <p class="text-center">
        <button
          class="btn btn-default"
          on:click={() => setHideCompleted(!hideCompleted)}
        >
          {hideCompleted ? "Show All" : "Hide Completed"}
        </button>
      </p>
      <div class="divider" />
      <ul>
        {#each tasks as task (task._id)}
          <Task {task} />
        {/each}
      </ul>
    {:else}
      <LoginForm />
    {/if}
  </div>
</main>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
