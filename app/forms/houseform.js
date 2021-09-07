export function getHouseFormTemplate() {
    return /*html*/ `
  <form class="bg-white rounded p-3 shadow visually-hidden" onsubmit="app.housesController.addHouse()"
  id="house-form">
  <div class="form-group">
    <label for="bedrooms" class="">Number of bedrooms:</label>
    <input type="number" class="form-control" name="bedrooms" id="bedrooms" required>
  </div>
  <div class="form-group">
    <label for="bedrooms" class="">Number of bathrooms:</label>
    <input type="number" class="form-control" name="bathrooms" id="bathrooms" required>
  </div>
  <div class="form-group">
    <label for="price" class="">Price:</label>
    <input type="number" class="form-control" name="price" id="price" min="0" max="5000000">
  </div>
  <div class="form-group">
  <label for="floors" class=""># of floors:</label>
  <input type="number" class="form-control" name="levels" id="levels" min="0" max="5">
</div>
  </div>
  <div class="form-group">
    <label for="size" class="">Year:</label>
    <input type="number" class="form-control" name="year" id="year">
  </div>
  <div class="form-group">
    <label for="description" class="">description:</label>
    <textarea type="text" class="form-control" name="description" id="description" rows="5"></textarea>
  </div>
  <div class="form-group">
    <label for="img" class="">Add image:</label>
    <input type="url" class="form-control" name="imgUrl" id="imgUrl" required>
  </div>
  <div class="button-group my-3">
    <button type="reset" class="btn btn-secondary">clear</button>
    <button type="submit" class="btn btn-primary">submit</button>
  </div>
</form>
  `
}