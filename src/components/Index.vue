<template>
  <div class="hello">
    <h1>
      <router-link to="/login">退出</router-link>
    </h1>
    <div style="width:500px;height: 500px;background: red;">
      <div style="width:100px;height:500px;background: sandybrown;float: left;">
        <ul>
          <li>
            <router-link to="/admin/user">user</router-link>
          </li>
          <li>
            <router-link to="/admin/role">role</router-link>
          </li>
        </ul>
      </div>
      <div style="width:400px;height:500px;background: skyblue;float: left;">
        <router-view/>
      </div>
    </div>
  </div>
</template>
