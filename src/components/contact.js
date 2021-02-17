import React, { useState } from "react"

const Contact = () => {
  const [status, setStatus] = useState("")

  function submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        setStatus("SUCCESS")
      } else {
        setStatus("ERROR")
      }
    }
    xhr.send(data)
  }

  return (
    <form
      onSubmit={submitForm}
      action="https://formspree.io/f/xjvpdrjg"
      method="POST"
      className="contact-form"
    >
      <select name="reason" id="reason" required="">
        <option value="General">General</option>
        <option value="Job Opportunity">Job Opportunity</option>
        <option value="Freelance">Freelance</option>
        <option value="Other">Other</option>
      </select>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Your Name *"
        required
      />
      <input
        type="email"
        name="_replyto"
        id="email-address"
        placeholder="Your Email *"
        require=""
      />

      <textarea
        rows="5"
        name="message"
        id="message"
        placeholder="Your Message *"
        required=""
      ></textarea>
      <input
        type="hidden"
        name="_subject"
        id="email-subject"
        value="Danby Contact Form Submission"
      />
      {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
      {status === "ERROR" && <p>Ooops! There was an error.</p>}
    </form>
  )
}

export default Contact
