export function getJobsFormTemplate() {
    return /*html*/ `
  <form class="bg-white rounded p-3 shadow visually-hidden" onsubmit="app.jobsController.addJob()"
  id="jobs-form">
  <div class="form-group">
    <label for="title" class="">Job title:</label>
    <input type="title" class="form-control" name="title" id="title" required>
  </div>
  <div class="form-group">
    <label for="pay" class="">Pay/hr:</label>
    <input type="number" class="form-control" name="pay" id="pay" min="0" max="5000000">
  </div>
  <div class="form-group">
  <label for="floors" class="">Starting date:</label>
  <input type="date" class="form-control" name="startdate" id="startdate">
</div>
  </div>
  <div class="form-group">
    <label for="description" class="">description:</label>
    <textarea type="text" class="form-control" name="description" id="description" rows="5"></textarea>
  </div>
  <div class="form-group">
    <label for="img" class="">Add image:</label>
    <input type="url" class="form-control" name="img" id="img" required>
  </div>
  <div class="button-group my-3">
    <button type="reset" class="btn btn-secondary">clear</button>
    <button type="submit" class="btn btn-primary">submit</button>
  </div>
</form>
  `
}