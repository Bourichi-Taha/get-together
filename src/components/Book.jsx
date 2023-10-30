import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
const Book = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k8qdyrq', 'template_66c1624', form.current, "user_DLi4HUetQbj9btmASRcdz")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    form.current.reset();
    document.querySelector("select.form-control.nice-select.wide").value = "";
  };
    return (
        <section className="book_section layout_padding">
            <div className="container">
                <div className="heading_container">
                    <h2>
                        Book A Table
                    </h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form_container">
                            <form ref={form}  onSubmit={sendEmail}>
                                <div>
                                    <input name="user_name" type="text" className="form-control" placeholder="Your Name" />
                                </div>
                                <div>
                                    <input name="user_phone" type="text" className="form-control" placeholder="Phone Number" />
                                </div>
                                <div>
                                    <input name='user_email' type="email" className="form-control" placeholder="Your Email" />
                                </div>
                                <div>
                                    <select name='number_persons' className="form-control nice-select wide">
                                        <option value="" disabled selected>
                                            How many persons?
                                        </option>
                                        <option value="1">
                                            1
                                        </option>
                                        <option value="2">
                                            2
                                        </option>
                                        <option value="3">
                                            3
                                        </option>
                                        <option value="4">
                                            4
                                        </option>
                                        <option value="5">
                                            5
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <input name='date' type="date" className="form-control"/>
                                </div>
                                <div className="btn_box">
                                    <button type='submit'>
                                        Book Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="map_container ">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.355329035685!2d-5.808349588643836!3d35.76664702516263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b81ba7692e453%3A0x7fb4a9f2027657f1!2sTanger%20App%20Hotel!5e0!3m2!1sen!2sma!4v1698358892383!5m2!1sen!2sma" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Book