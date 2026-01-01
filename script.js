
document.addEventListener("DOMContentLoaded", function () {

  const home = document.getElementById("home");
  const profile = document.getElementById("profile");
  const donorForm = document.getElementById("donorForm");
  const finderForm = document.getElementById("finderForm");

  function showHome() {
    home.style.display = "flex";
    profile.style.display = "none";
    donorForm.style.display = "none";
    finderForm.style.display = "none";
  }

  function showProfile() {
    home.style.display = "none";
    profile.style.display = "block";
    donorForm.style.display = "none";
    finderForm.style.display = "none";
  }

  function openForm() {
    home.style.display = "none";
    profile.style.display = "none";
    donorForm.style.display = "block";
  }

  function openFinder() {
    home.style.display = "none";
    profile.style.display = "none";
    donorForm.style.display = "none";
    finderForm.style.display = "block";
  }

  
  document.getElementById("registerForm").addEventListener("submit", function(e){
    e.preventDefault();

    const donor = {
  name: document.getElementById("name").value,
  age: document.getElementById("age").value,
  gender: document.getElementById("gender").value,
  blood: document.getElementById("blood").value,
  phone: document.getElementById("phone").value,
  email: document.getElementById("email").value,
  district: document.getElementById("district").value,
  address: document.getElementById("address").value,
  pincode: document.getElementById("pincode").value,
  lastDonate: document.getElementById("lastDonate").value,
  status: document.getElementById("status").value
};

    let data = JSON.parse(localStorage.getItem("donors")) || [];
    data.push(donor);
    localStorage.setItem("donors", JSON.stringify(data));

    alert("Donor Registered Successfully");
    this.reset();
  });

  
  window.searchDonor = function () {

  const d = document.getElementById("searchDistrict").value;
  const b = document.getElementById("searchBlood").value;
  const p = document.getElementById("searchPincode").value;

  const result = document.getElementById("searchResult");
  result.innerHTML = "";

  const data = JSON.parse(localStorage.getItem("donors")) || [];

  const filtered = data.filter(x =>
    x.status === "Available" &&
    x.district === d &&
    x.blood === b &&
    (p === "" || x.pincode === p)
  );

  if (filtered.length === 0) {
    result.innerHTML = "<p>No Donor Found</p>";
    return;
  }

  
filtered.forEach(x => {
  result.innerHTML += `
    <div class="user-card">
      <h3>${x.name}</h3>

      <p><b>Age:</b> ${x.age}</p>
      <p><b>Gender:</b> ${x.gender}</p>
      <p><b>Blood Group:</b> ${x.blood}</p>
      <p><b>Phone:</b> ${x.phone}</p>
      <p><b>Email:</b> ${x.email}</p>
      <p><b>District:</b> ${x.district}</p>
      <p><b>Address:</b> ${x.address}</p>
      <p><b>Pin Code:</b> ${x.pincode}</p>
      <p><b>Last Donate Date:</b> ${x.lastDonate}</p>

      <p>
        <b>Status:</b> 
        <span class="${x.status === 'Available' ? 'available' : 'unavailable'}">
          ${x.status}
        </span>
      </p>
    </div>
  `;
});
  };


  window.showHome = showHome;
  window.showProfile = showProfile;
  window.openForm = openForm;
  window.openFinder = openFinder;

});


     