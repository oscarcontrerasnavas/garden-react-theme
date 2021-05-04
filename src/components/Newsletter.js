const Newsletter = () => {
  return (
    <section className="newsletter py-6 my-6 overflow-hidden">
      <div
        className="container position-relative parallax float-3"
        data-speed="2"
      >
        <div className="row align-items-center justify-content-evenly">
          <div className="col-12 col-md-3">
            <p className="fs-1 fw-light mb-0 pb-0">
              Subscribe to our Newsletter
            </p>
          </div>
          <div className="col-12 col-md-7">
            <form action="" className="row align-items-center">
              <div className="col-9 col-xl-8 position-relative">
                <label htmlFor="email" className="visually-hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  required
                />
                <i className="bi bi-envelope fs-5 position-absolute"></i>
              </div>
              <div className="col">
                <button type="submit" className="btn btn-primary text-light">
                  I want to subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
