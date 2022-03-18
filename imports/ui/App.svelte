<script>
  import { Meteor } from "meteor/meteor";
  import { TasksCollection } from "../db/TasksCollection";
  import NavBar from "./NavBar.svelte";
  import Footer from "./Footer.svelte";
  import Task from "./Task.svelte";
  import TaskForm from "./TaskForm.svelte";
  import LoginForm from "./LoginForm.svelte";

  let isLoading = true;
  const handler = Meteor.subscribe("tasks");

  let user = null;
  let incompleteCount;
  let pendingTasksTitle = "";
  let tasks = [];
  let hideCompleted = false;
  const hideCompletedFilter = { isChecked: { $ne: true } };
  $m: {
    user = Meteor.user();
    if (user) {
      isLoading = !handler.ready();

      const userFilter = { userId: user._id };
      const pendingOnlyFilter = { ...hideCompletedFilter, ...userFilter };

      tasks = TasksCollection.find(
        hideCompleted ? pendingOnlyFilter : userFilter,
        { sort: { createdAt: -1 } }
      ).fetch();

      incompleteCount = TasksCollection.find(pendingOnlyFilter).count();

      pendingTasksTitle = `${incompleteCount ? ` (${incompleteCount})` : ""}`;
    }
  }

  const setHideCompleted = (value) => {
    hideCompleted = value;
  };
</script>

<NavBar {pendingTasksTitle} {user} />
<main class="min-h-screen">
  <div class="max-w-sm md:max-w-lg mx-auto px-8">
    {#if user}
      {#if isLoading}
        <div class="loading">loading...</div>
      {/if}
      <TaskForm />
      <div class="text-center my-4">
        <button
          class="btn btn-secondary"
          on:click={() => setHideCompleted(!hideCompleted)}
        >
          {hideCompleted ? "Show All" : "Hide Completed"}
        </button>
      </div>

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
<Footer />

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
