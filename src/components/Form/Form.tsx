import { FC, useState } from "react";
import styles from "./Form.module.scss"; // Импорт стилей из SCSS

interface FormProps {
  title: string;
  handleClick: (email: string, pass: string) => void;
}

const Form: FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false); // Хук для управления отображением пароля

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleClick(email, pass);
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <input
          type="email"
          className={styles.customInput}
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
      </div>
      <div className={styles.inputWrapper}>
        <input
          type={showPass ? "text" : "password"}
          className={styles.customInput}
          value={pass}
          placeholder="Enter your password"
          onChange={(e) => setPass(e.target.value)}
          autoComplete="current-password"
        />
        <button
          type="button"
          className={styles.toggleButton}
          onClick={() => setShowPass(!showPass)}
        >
          {showPass ? "Hide" : "Show"}
        </button>
      </div>
      <button type="submit" className={styles.submitButton}>
        {title}
      </button>
    </form>
  );
};

export default Form;
