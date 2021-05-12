const Newsletter = () => {
  return (
    <section className="newsletter py-6 my-6 overflow-hidden observed">
      <div className="container position-relative" data-speed="2">
        <div className="row align-items-center justify-content-evenly">
          <div className="col-12 col-lg-4 mb-3 mb-md-0">
            <p className="fs-1 fw-light mb-0 pb-0">
              Subscribe to our Newsletter
            </p>
          </div>
          <div className="col-12 col-lg-8">
            <form
              action=""
              className="row align-items-center justify-content-between mt-md-4"
            >
              <div className="col-12 col-md-7 col-lg-7 position-relative mb-3 mb-md-0">
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
              <div className="col-md-5">
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
