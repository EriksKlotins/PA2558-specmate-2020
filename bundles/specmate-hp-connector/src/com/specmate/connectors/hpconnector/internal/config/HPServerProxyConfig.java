package com.specmate.connectors.hpconnector.internal.config;

import java.io.IOException;
import java.util.Dictionary;
import java.util.Hashtable;

import org.osgi.service.cm.ConfigurationAdmin;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.log.LogService;

import com.specmate.common.OSGiUtil;
import com.specmate.config.api.IConfigService;

@Component(immediate = true)
public class HPServerProxyConfig {
	public static final String PID = "com.specmate.HPServerProxy";
	public static final String KEY_HOST = "hpConnectorHost";
	public static final String KEY_PORT = "hpConnectorPort";
	public static final String KEY_TIMEOUT = "hpConnectorTimeout";

	private ConfigurationAdmin configurationAdmin;
	private IConfigService configService;
	private LogService logService;

	/** Configures the CDO persistency service. */
	@Activate
	private void configureCDO() throws IOException {
		Dictionary<String, Object> properties = new Hashtable<>();
		String host = configService.getConfigurationProperty(KEY_HOST);
		String port = configService.getConfigurationProperty(KEY_PORT);
		String timeout = configService.getConfigurationProperty(KEY_TIMEOUT);

		if (host != null && port != null && timeout != null) {
			properties.put(KEY_HOST, host);
			properties.put(KEY_TIMEOUT, Integer.parseInt(timeout));
			properties.put(KEY_PORT, port);
			logService.log(LogService.LOG_DEBUG,
					"Configuring CDO with:\n" + OSGiUtil.configDictionaryToString(properties));

			OSGiUtil.configureService(configurationAdmin, PID, properties);
		}

	}

	/** Service reference for config admin */
	@Reference
	public void setConfigurationAdmin(ConfigurationAdmin configurationAdmin) {
		this.configurationAdmin = configurationAdmin;
	}

	/** Service reference for config service */
	@Reference
	public void setConfigurationService(IConfigService configService) {
		this.configService = configService;
	}

	@Reference
	public void setLogService(LogService logService) {
		this.logService = logService;
	}
}