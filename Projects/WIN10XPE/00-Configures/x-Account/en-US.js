$patches_opt['account.localized_admin_name'] = 'Administrator';

if ($patches_opt['account.custom_admin_name'] ) {
    $patches_var['custom_admin_name_preseted'] = true;
} else {
    $patches_var['custom_admin_name_preseted'] = false;
    $patches_opt['account.custom_admin_name'] = $patches_opt['account.localized_admin_name'];
}
