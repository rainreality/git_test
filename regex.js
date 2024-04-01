// This regex matches all below phone numbers
// Video reference: https://www.youtube.com/watch?v=rhzKDrUiJVk
/(?:(\+1)[ -])?\(?(?<areacode>\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})/gm

/*
1234567890
123-456-7890
123 456 7890
(123) 456-7890
+1 123 456 7890
*/