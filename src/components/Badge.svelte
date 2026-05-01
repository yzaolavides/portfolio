<script>
  const badgeStyles = {
    'UI/UX':        'bg-violet-100 text-violet-700',
    'Social Media': 'bg-pink-100 text-pink-700',
    'Reports':      'bg-blue-100 text-blue-700',
    'Branding':     'bg-orange-100 text-orange-700',
    'Print':        'bg-green-100 text-green-700',
    'Motion':       'bg-yellow-100 text-yellow-700',
    'Web':          'bg-cyan-100 text-cyan-700',
    'Presentation': 'bg-rose-100 text-rose-700',
  };

  const { tag } = $props();
</script>

<span class="inline-block px-1.5 py-0.5 rounded-sm text-xs font-medium {badgeStyles[tag] ?? 'bg-gray-100 text-gray-600'}">
  {tag}
</span>