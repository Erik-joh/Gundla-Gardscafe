import styles from "./booking.module.css";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className={styles.form}>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/mqkgzpjv"
          method="POST"
        >
          <div className={styles.text}>
            <h2>{this.props.title}</h2>
            <p>
              Varmt välkommen att höra av er till oss. Er förfrågan är inte
              bindande.
            </p>
            <div className={styles.textInfo}>
              <p>Telefon: {this.props.telephoneNumber} | </p>
              <p> Mail: {this.props.email} | </p>
              <p> Via formulär nedan:</p>
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.order}>
              <label>
                <h4>För- och efternamn</h4>
              </label>
              <input type="text" name="name" placeholder="För- och efternamn" />
            </div>
            <div className={styles.order}>
              <label>
                <h4>Mailadress</h4>
              </label>
              <input type="email" name="email" placeholder="exempel@mail.se" />
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.order}>
              <label>
                <h4>Planerat antal gäster</h4>
              </label>
              <input type="text" name="guests" placeholder="0-100" />
            </div>
            <div className={styles.order}>
              <label>
                <h4>Önskat datum</h4>
              </label>
              <input type="text" name="date" placeholder="2020/10/11"></input>
            </div>
          </div>
          <div className={styles.last}>
            <label>
              <h4>Typ av tillställningen och önskemål</h4>
            </label>
            <input
              maxLength="500"
              type="text"
              name="type of party"
              placeholder="Ska cateringen t.ex. anpassas efter en företagskonferens eller ett studentfirande? Önskar ni servera buffé eller upplagd tallrik?"
            />
            {status === "SUCCESS" ? (
              <p>Tack! Eran bokningsförfrågan har skickats.</p>
            ) : (
              <button className={styles.submitButton}>Skicka</button>
            )}
            {status === "ERROR" && (
              <p>Oj, något gick fel. Glömde du ett fält?</p>
            )}
          </div>
        </form>
      </div>
    );
  }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
