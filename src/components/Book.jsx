import React from 'react'

const Book = () => {
    return (
        <section class="book_section layout_padding">
            <div class="container">
                <div class="heading_container">
                    <h2>
                        Book A Table
                    </h2>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form_container">
                            <form action="">
                                <div>
                                    <input type="text" class="form-control" placeholder="Your Name" />
                                </div>
                                <div>
                                    <input type="text" class="form-control" placeholder="Phone Number" />
                                </div>
                                <div>
                                    <input type="email" class="form-control" placeholder="Your Email" />
                                </div>
                                <div>
                                    <select class="form-control nice-select wide">
                                        <option value="" disabled selected>
                                            How many persons?
                                        </option>
                                        <option value="">
                                            2
                                        </option>
                                        <option value="">
                                            3
                                        </option>
                                        <option value="">
                                            4
                                        </option>
                                        <option value="">
                                            5
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <input type="date" class="form-control"/>
                                </div>
                                <div class="btn_box">
                                    <button>
                                        Book Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="map_container ">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.355329035685!2d-5.808349588643836!3d35.76664702516263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b81ba7692e453%3A0x7fb4a9f2027657f1!2sTanger%20App%20Hotel!5e0!3m2!1sen!2sma!4v1698358892383!5m2!1sen!2sma" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Book