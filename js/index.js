module.exports = (sequelize) => {
  return {
    accounts: sequelize.import('accounts', require('./accounts')),
    account_statement_notifications: sequelize.import('account_statement_notifications', require('./account_statement_notifications')),
    agent_sales: sequelize.import('agent_sales', require('./agent_sales')),
    autologin_tokens: sequelize.import('autologin_tokens', require('./autologin_tokens')),
    average_monthly_invoices: sequelize.import('average_monthly_invoices', require('./average_monthly_invoices')),
    average_monthly_payment: sequelize.import('average_monthly_payment', require('./average_monthly_payment')),
    banks: sequelize.import('banks', require('./banks')),
    banners: sequelize.import('banners', require('./banners')),
    banxico_exchange_rate: sequelize.import('banxico_exchange_rate', require('./banxico_exchange_rate')),
    collection_policies: sequelize.import('collection_policies', require('./collection_policies')),
    comercial_activities: sequelize.import('comercial_activities', require('./comercial_activities')),
    companies: sequelize.import('companies', require('./companies')),
    company_intercom_data: sequelize.import('company_intercom_data', require('./company_intercom_data')),
    company_payments: sequelize.import('company_payments', require('./company_payments')),
    company_site: sequelize.import('company_site', require('./company_site')),
    company_user: sequelize.import('company_user', require('./company_user')),
    conflict_documents: sequelize.import('conflict_documents', require('./conflict_documents')),
    contact_email: sequelize.import('contact_email', require('./contact_email')),
    contact_phone: sequelize.import('contact_phone', require('./contact_phone')),
    contacts: sequelize.import('contacts', require('./contacts')),
    contpaqi_license_config_log: sequelize.import('contpaqi_license_config_log', require('./contpaqi_license_config_log')),
    contracts: sequelize.import('contracts', require('./contracts')),
    credit_days: sequelize.import('credit_days', require('./credit_days')),
    credit_notes: sequelize.import('credit_notes', require('./credit_notes')),
    credit_payments: sequelize.import('credit_payments', require('./credit_payments')),
    credit_report_accounts: sequelize.import('credit_report_accounts', require('./credit_report_accounts')),
    credit_report_addresses: sequelize.import('credit_report_addresses', require('./credit_report_addresses')),
    credit_report_companies: sequelize.import('credit_report_companies', require('./credit_report_companies')),
    credit_report_credits: sequelize.import('credit_report_credits', require('./credit_report_credits')),
    credit_report_customers: sequelize.import('credit_report_customers', require('./credit_report_customers')),
    credit_report_employments: sequelize.import('credit_report_employments', require('./credit_report_employments')),
    credit_report_endorses: sequelize.import('credit_report_endorses', require('./credit_report_endorses')),
    credit_report_morals: sequelize.import('credit_report_morals', require('./credit_report_morals')),
    credit_report_shareholders: sequelize.import('credit_report_shareholders', require('./credit_report_shareholders')),
    credit_reports: sequelize.import('credit_reports', require('./credit_reports')),
    cuenta_clabe_control: sequelize.import('cuenta_clabe_control', require('./cuenta_clabe_control')),
    currencies: sequelize.import('currencies', require('./currencies')),
    customer_balances: sequelize.import('customer_balances', require('./customer_balances')),
    customer_invites: sequelize.import('customer_invites', require('./customer_invites')),
    customer_kpis: sequelize.import('customer_kpis', require('./customer_kpis')),
    customers: sequelize.import('customers', require('./customers')),
    customers_pending_balance: sequelize.import('customers_pending_balance', require('./customers_pending_balance')),
    customers_unassigned: sequelize.import('customers_unassigned', require('./customers_unassigned')),
    customers_without_logbook: sequelize.import('customers_without_logbook', require('./customers_without_logbook')),
    discounts: sequelize.import('discounts', require('./discounts')),
    dispersion_orders: sequelize.import('dispersion_orders', require('./dispersion_orders')),
    distributor_levels: sequelize.import('distributor_levels', require('./distributor_levels')),
    distributors: sequelize.import('distributors', require('./distributors')),
    economic_sectors: sequelize.import('economic_sectors', require('./economic_sectors')),
    erps: sequelize.import('erps', require('./erps')),
    extensions: sequelize.import('extensions', require('./extensions')),
    failed_jobs: sequelize.import('failed_jobs', require('./failed_jobs')),
    features: sequelize.import('features', require('./features')),
    formulas: sequelize.import('formulas', require('./formulas')),
    historial_deuda_comentarios: sequelize.import('historial_deuda_comentarios', require('./historial_deuda_comentarios')),
    history_assignments: sequelize.import('history_assignments', require('./history_assignments')),
    history_invoices: sequelize.import('history_invoices', require('./history_invoices')),
    import_data_service_logs: sequelize.import('import_data_service_logs', require('./import_data_service_logs')),
    incidence_reasons: sequelize.import('incidence_reasons', require('./incidence_reasons')),
    incidences: sequelize.import('incidences', require('./incidences')),
    invoice_json: sequelize.import('invoice_json', require('./invoice_json')),
    invoices_expired: sequelize.import('invoices_expired', require('./invoices_expired')),
    invoices_to_expire: sequelize.import('invoices_to_expire', require('./invoices_to_expire')),
    jobs: sequelize.import('jobs', require('./jobs')),
    licence_partner: sequelize.import('licence_partner', require('./licence_partner')),
    licence_renewals: sequelize.import('licence_renewals', require('./licence_renewals')),
    licences: sequelize.import('licences', require('./licences')),
    licence_upgrade: sequelize.import('licence_upgrade', require('./licence_upgrade')),
    license_payments: sequelize.import('license_payments', require('./license_payments')),
    licenses_contpaqi: sequelize.import('licenses_contpaqi', require('./licenses_contpaqi')),
    licenses_feraz: sequelize.import('licenses_feraz', require('./licenses_feraz')),
    logbook: sequelize.import('logbook', require('./logbook')),
    logbook_payment: sequelize.import('logbook_payment', require('./logbook_payment')),
    logs: sequelize.import('logs', require('./logs')),
    longest_invoice_years: sequelize.import('longest_invoice_years', require('./longest_invoice_years')),
    migrations: sequelize.import('migrations', require('./migrations')),
    notification_rules: sequelize.import('notification_rules', require('./notification_rules')),
    notifications_config: sequelize.import('notifications_config', require('./notifications_config')),
    notifications_customers: sequelize.import('notifications_customers', require('./notifications_customers')),
    notifications: sequelize.import('notifications', require('./notifications')),
    notifications_sms: sequelize.import('notifications_sms', require('./notifications_sms')),
    notifications_templates: sequelize.import('notifications_templates', require('./notifications_templates')),
    notification_templates: sequelize.import('notification_templates', require('./notification_templates')),
    number_invoices: sequelize.import('number_invoices', require('./number_invoices')),
    number_payments: sequelize.import('number_payments', require('./number_payments')),
    number_promises_accomplished: sequelize.import('number_promises_accomplished', require('./number_promises_accomplished')),
    number_promises_expired: sequelize.import('number_promises_expired', require('./number_promises_expired')),
    number_promises: sequelize.import('number_promises', require('./number_promises')),
    oauth_access_tokens: sequelize.import('oauth_access_tokens', require('./oauth_access_tokens')),
    oauth_auth_codes: sequelize.import('oauth_auth_codes', require('./oauth_auth_codes')),
    oauth_clients: sequelize.import('oauth_clients', require('./oauth_clients')),
    oauth_personal_access_clients: sequelize.import('oauth_personal_access_clients', require('./oauth_personal_access_clients')),
    oauth_refresh_tokens: sequelize.import('oauth_refresh_tokens', require('./oauth_refresh_tokens')),
    partner_banners: sequelize.import('partner_banners', require('./partner_banners')),
    partners: sequelize.import('partners', require('./partners')),
    password_resets: sequelize.import('password_resets', require('./password_resets')),
    pay_days: sequelize.import('pay_days', require('./pay_days')),
    payment_concepts: sequelize.import('payment_concepts', require('./payment_concepts')),
    payment_formats: sequelize.import('payment_formats', require('./payment_formats')),
    payment_methods: sequelize.import('payment_methods', require('./payment_methods')),
    payment_periods: sequelize.import('payment_periods', require('./payment_periods')),
    payment_promise: sequelize.import('payment_promise', require('./payment_promise')),
    payment_promise_receivables: sequelize.import('payment_promise_receivables', require('./payment_promise_receivables')),
    payment_request_receivable: sequelize.import('payment_request_receivable', require('./payment_request_receivable')),
    payments: sequelize.import('payments', require('./payments')),
    payments_per_month: sequelize.import('payments_per_month', require('./payments_per_month')),
    payments_receivable: sequelize.import('payments_receivable', require('./payments_receivable')),
    payments_request: sequelize.import('payments_request', require('./payments_request')),
    periods: sequelize.import('periods', require('./periods')),
    permission_role: sequelize.import('permission_role', require('./permission_role')),
    permissions: sequelize.import('permissions', require('./permissions')),
    plans: sequelize.import('plans', require('./plans')),
    promises_payment: sequelize.import('promises_payment', require('./promises_payment')),
    ranges: sequelize.import('ranges', require('./ranges')),
    receivables: sequelize.import('receivables', require('./receivables')),
    receivables_notifications: sequelize.import('receivables_notifications', require('./receivables_notifications')),
    recovery_goals: sequelize.import('recovery_goals', require('./recovery_goals')),
    reference_receivable: sequelize.import('reference_receivable', require('./reference_receivable')),
    references: sequelize.import('references', require('./references')),
    related_documents: sequelize.import('related_documents', require('./related_documents')),
    risk_score_log: sequelize.import('risk_score_log', require('./risk_score_log')),
    roles: sequelize.import('roles', require('./roles')),
    role_user: sequelize.import('role_user', require('./role_user')),
    sales_agent: sequelize.import('sales_agent', require('./sales_agent')),
    sales_features: sequelize.import('sales_features', require('./sales_features')),
    sat_sync_webhook_log: sequelize.import('sat_sync_webhook_log', require('./sat_sync_webhook_log')),
    sites: sequelize.import('sites', require('./sites')),
    sync_log: sequelize.import('sync_log', require('./sync_log')),
    todos: sequelize.import('todos', require('./todos')),
    todos_type: sequelize.import('todos_type', require('./todos_type')),
    total_monthly_invoice: sequelize.import('total_monthly_invoice', require('./total_monthly_invoice')),
    transactions_files: sequelize.import('transactions_files', require('./transactions_files')),
    transactions: sequelize.import('transactions', require('./transactions')),
    upgrades: sequelize.import('upgrades', require('./upgrades')),
    user_login_log: sequelize.import('user_login_log', require('./user_login_log')),
    user_notifications: sequelize.import('user_notifications', require('./user_notifications')),
    users: sequelize.import('users', require('./users')),
    user_sync_log: sequelize.import('user_sync_log', require('./user_sync_log')),
    user_sync_log_payments: sequelize.import('user_sync_log_payments', require('./user_sync_log_payments')),
    user_system_logs: sequelize.import('user_system_logs', require('./user_system_logs')),
    webservices_log: sequelize.import('webservices_log', require('./webservices_log')),
  };
};
