#!/usr/bin/perl

my $filename = 'input.txt';
open(my $fh, '<:encoding(UTF-8)', $filename);

my $result = 0;
while (my $row = <$fh>) {
  chomp $row;
  my @parts = split / /, $row;
  my @occurs = split /-/, $parts[0];

  my $i = $occurs[0] - 1;
  my $j = $occurs[1] - 1;
  my $char = substr($parts[1], 0, 1);
  my $password = $parts[2];

  $pos1 = substr($password, $i, 1);
  $pos2 = substr($password, $j, 1);

  if (($pos1 eq $char || $pos2 eq $char) && !($pos1 eq $char && $pos2 eq $char)) {
    $result++;
  }

}

print $result;
