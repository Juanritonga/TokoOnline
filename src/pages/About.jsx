function About() {
  return (
    <div className="container-about py-12 bg-gray-50">
  <div className="profile flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-lg max-w-4xl mx-auto">
    <img
      src={"./personal.jpg"}
      alt="Donald McKinney"
      className="profile-img mb-10 w-36 h-36 rounded-full object-cover shadow-md"
    />
    <div className="info">
      <h1 className="name text-3xl font-semibold text-gray-800 mb-2">JUANDA RITONGA</h1>
      <p className="position text-xl text-gray-600 mb-4">JUNIOR FRONT END DEVELOPER</p>
      <p className="bio text-base text-gray-600 mb-6">
        This journey will provide me with an opportunity to showcase my abilities and growth as a front-end developer, while further enhancing my skills in creating intuitive and responsive user interfaces.
      </p>
      <ul className="contact-list list-none space-y-4">
        <li className="flex items-center space-x-3 text-gray-600">
          <i className="fas fa-calendar-alt text-blue-500"></i>
          <span>8th December, 2001</span>
        </li>
        <li className="flex items-center space-x-3 text-gray-600">
          <i className="fas fa-phone-alt text-blue-500"></i>
          <span>(+62) 895 2938 8788</span>
        </li>
        <li className="flex items-center space-x-3 text-gray-600">
          <i className="fas fa-envelope text-blue-500"></i>
          <span>ritongajuanda46@gmail.com</span>
        </li>
        <li className="flex items-center space-x-3 text-gray-600">
          <i className="fas fa-home text-blue-500"></i>
          <span>Jakarta</span>
        </li>
      </ul>
    </div>
  </div>
</div>

  )
}

export default About