
<div className="container mt-5">
<h2 className="mb-4">Profile Settings</h2>
{/* <form onSubmit={handleSubmit} className="row g-3"> */}
<form  className="row g-3">
  {/* Full Name */}
  <div className="col-md-6">
    <label htmlFor="fullName" className="form-label">Full Name</label>
    <input
      type="text"
      className="form-control"
      id="fullName"
      name="fullName"
      // value={profileData.fullName}
      // onChange={handleInputChange}
    />
  </div>

  {/* Username */}
  <div className="col-md-6">
    <label htmlFor="username" className="form-label">Username</label>
    <input
      type="text"
      className="form-control"
      id="username"
      name="username"
      // value={profileData.username}
      // onChange={handleInputChange}
    />
  </div>

  {/* Email */}
  <div className="col-md-6">
    <label htmlFor="email" className="form-label">Email</label>
    <input
      type="email"
      className="form-control"
      id="email"
      name="email"
      // value={profileData.email}
      // onChange={handleInputChange}
    />
  </div>

  {/* Phone Number */}
  <div className="col-md-6">
    <label htmlFor="phoneNo" className="form-label">Phone No.</label>
    <input
      type="tel"
      className="form-control"
      id="phoneNo"
      name="phoneNo"
      // value={profileData.phoneNo}
      // onChange={handleInputChange}
    />
  </div>

  {/* Profile Picture */}
  <div className="col-md-12">
    <label htmlFor="profilePic" className="form-label">Profile Picture</label>
    <input
      type="file"
      className="form-control"
      id="profilePic"
      name="profilePic"
      // onChange={handleFileChange}
    />
  </div>

  {/* Country */}
  <div className="col-md-6">
    <label htmlFor="country" className="form-label">Country</label>
    <input
      type="text"
      className="form-control"
      id="country"
      name="country"
      // value={profileData.country}
      // onChange={handleInputChange}
    />
  </div>

  {/* Role */}
  <div className="col-md-6">
    <label htmlFor="role" className="form-label">Role</label>
    <select
      className="form-select"
      id="role"
      name="role"
      // value={profileData.role}
      // onChange={handleInputChange}
    >
      <option value="">Select Role</option>
      <option value="Admin">Admin</option>
      <option value="User">User</option>
    </select>
  </div>

  {/* Account Visibility */}
  <div className="col-md-12">
    <label htmlFor="accountVisibility" className="form-label">Account Visibility</label>
    <select
      className="form-select"
      id="accountVisibility"
      name="accountVisibility"
      // value={profileData.accountVisibility}
      // onChange={handleInputChange}
    >
      <option value="">Select Visibility</option>
      <option value="Public">Public</option>
      <option value="Private">Private</option>
    </select>
  </div>

  {/* Password */}
  <div className="col-md-6">
    <label htmlFor="password" className="form-label">Password</label>
    <input
      type="password"
      className="form-control"
      id="password"
      name="password"
      // value={profileData.password}
      // onChange={handleInputChange}
    />
  </div>

  {/* Confirm Password */}
  <div className="col-md-6">
    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
    <input
      type="password"
      className="form-control"
      id="confirmPassword"
      name="confirmPassword"
      // value={profileData.confirmPassword}
      // onChange={handleInputChange}
    />
  </div>

  {/* Submit Button */}
  <div className="col-md-12">
    <button type="submit" className="btn btn-primary w-100">
      {/* {loading ? "Updating..." : "Update Profile"} */}
       Update Profile
    </button>
  </div>
</form>

<div className="container mt-5">
  <h2 className="mb-4">Additional Information</h2>
  {/* {error && <p className="text-danger">{error}</p>} */}
  {/* <form onSubmit={handleSubmit} className="row g-3"> */}
  <form className="row g-3">
    {/* Full Address */}
    <div className="col-md-12">
      <label htmlFor="fullAddress" className="form-label">Full Address</label>
      <textarea
        className="form-control"
        id="fullAddress"
        name="fullAddress"
        rows="3"
        // value={formData.fullAddress}
        // onChange={handleInputChange}
      />
    </div>

    {/* Permanent Address */}
    <div className="col-md-6">
      <label htmlFor="permanentAddress" className="form-label">Permanent Address</label>
      <textarea
        className="form-control"
        id="permanentAddress"
        name="permanentAddress"
        rows="2"
        // value={formData.permanentAddress}
        // onChange={handleInputChange}
      />
    </div>

    {/* Current Address */}
    <div className="col-md-6">
      <label htmlFor="currentAddress" className="form-label">Current Address</label>
      <textarea
        className="form-control"
        id="currentAddress"
        name="currentAddress"
        rows="2"
        // value={formData.currentAddress}
        // onChange={handleInputChange}
      />
    </div>

    {/* Education */}
    <div className="col-md-12">
      <label htmlFor="education" className="form-label">Education</label>
      <input
        type="text"
        className="form-control"
        id="education"
        name="education"
        // value={formData.education}
        // onChange={handleInputChange}
      />
    </div>

    {/* Schooling */}
    <div className="col-md-6">
      <label htmlFor="schooling" className="form-label">Schooling</label>
      <input
        type="text"
        className="form-control"
        id="schooling"
        name="schooling"
        // value={formData.schooling}
        // onChange={handleInputChange}
      />
    </div>

    {/* Graduation */}
    <div className="col-md-6">
      <label htmlFor="graduation" className="form-label">Graduation</label>
      <input
        type="text"
        className="form-control"
        id="graduation"
        name="graduation"
        // value={formData.graduation}
        // onChange={handleInputChange}
      />
    </div>

    {/* Post Graduation */}
    <div className="col-md-6">
      <label htmlFor="postGraduation" className="form-label">Post Graduation</label>
      <input
        type="text"
        className="form-control"
        id="postGraduation"
        name="postGraduation"
        // value={formData.postGraduation}
        // onChange={handleInputChange}
      />
    </div>

    {/* PhD */}
    <div className="col-md-6">
      <label htmlFor="phd" className="form-label">PhD</label>
      <input
        type="text"
        className="form-control"
        id="phd"
        name="phd"
        // value={formData.phd}
        // onChange={handleInputChange}
      />
    </div>

    {/* Submit Button */}
    <div className="col-md-12">
      <button type="submit" className="btn btn-primary w-100">
        {/* {loading ? "Saving..." : "Save Additional Info"} */}
        Save Additional Info
      </button>
    </div>
  </form>
</div>
</div>