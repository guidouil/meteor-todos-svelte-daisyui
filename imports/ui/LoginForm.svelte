<script>
  import { Meteor } from "meteor/meteor";

  let username = "meteorite";
  let password = "password";

  const handleSubmit = () => {
    Meteor.loginWithPassword(username, password);
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="form-control w-full max-w-lg">
    <label class="label" for="username">
      <span class="label-text">Username</span>
    </label>
    <input
      type="text"
      class="input input-bordered input-lg w-full max-w-lg"
      placeholder="Username"
      name="username"
      id="username"
      required
      bind:value={username}
    />
  </div>

  <div class="form-control w-full max-w-lg">
    <label class="label" for="password">
      <span class="label-text">Password</span>
    </label>
    <input
      type="password"
      class="input input-bordered input-lg w-full max-w-lg"
      placeholder="Password"
      name="password"
      id="password"
      required
      bind:value={password}
    />
  </div>

  <br />
  <div class="text-center">
    <button class="btn btn-primary btn-block btn-lg" type="submit"
      >Log In</button
    >
  </div>
</form>
