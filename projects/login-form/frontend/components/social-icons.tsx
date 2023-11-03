export default function SocialIcons() {
  return (
    <div className="social-container">
      <a href="#" className="social bg-black">
        <img
          alt="Sign in with github"
          src="https://authjs.dev/img/providers/github.svg"
        />
      </a>
      <a href="#" className="social">
        <img
          alt="Sign in with google"
          src="https://authjs.dev/img/providers/google.svg"
        />
      </a>
      <a href="#" className="social">
        <img
          alt="Sign in with linkedin"
          src="https://authjs.dev/img/providers/linkedin.svg"
        />
      </a>
    </div>
  );
}
