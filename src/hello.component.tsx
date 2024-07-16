import { FC } from "react";
import classes from "./mystyles.module.scss";
import logoImg from "./content/logo_1.png";
import config from "./env-config";

export const HelloComponent: FC = () => {
	return (
		<>
			<h1 className={classes.redBackground}>Hello from React</h1>
			<p>Api server is {config.API_BASE}</p>
			<p>Feature A is {config.IS_FEATURE_A_ENABLED ? "enabled" : "disabled"}</p>
			<img src={logoImg} alt="logo" />
		</>
	);
};
