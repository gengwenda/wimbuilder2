$patches_opt['account.localized_admin_name'] = 'Administrateur';

if (!$patches_var['custom_admin_name_preseted']) {
    $patches_opt['account.custom_admin_name'] = $patches_opt['account.localized_admin_name'];
}
