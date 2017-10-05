<template>
    <b-navbar toggleable="md" type="dark" variant="info">

  <b-nav-toggle target="nav_collapse"></b-nav-toggle>

  <b-navbar-brand href="#">Timesheet : ระบบบันทึกลงเวลาเข้า-ออกทำงาน</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-nav is-nav-bar>
      <b-nav-item href="#">Link</b-nav-item>
      <b-nav-item href="#" disabled>Disabled</b-nav-item>
    </b-nav>

    <!-- Right aligned nav items -->
    <b-nav is-nav-bar class="ml-auto">

      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>
 
      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-nav>

  </b-collapse>
</b-navbar>
</template>
<script>
export default {
  name: 'navbar',
  props: {
    data: {
      type: Object,
      requird: true
    },
    header: {
      type: String,
      requird: true
    }
  },
  methods: {
    select () {
      this.$emit('select', this.data)
    }
  }
}
</script>

